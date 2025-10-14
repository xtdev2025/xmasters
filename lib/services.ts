import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Service } from './types';

const servicesDirectory = path.join(process.cwd(), 'data', 'services');

export function getAllServices(): Service[] {
  try {
    const fileNames = fs.readdirSync(servicesDirectory);
    const services = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Extract features from markdown content
        const featuresMatch = content.match(/## Recursos Principais\s+([\s\S]*?)(?=\n##|$)/);
        const features = featuresMatch
          ? featuresMatch[1]
              .split('\n')
              .filter(line => line.trim().startsWith('-'))
              .map(line => line.trim().substring(2))
          : [];
        
        // Extract detail (everything before "## Recursos Principais")
        const detail = content.split('## Recursos Principais')[0].trim();
        
        return {
          id: data.id,
          name: data.name,
          offerType: data.offerType,
          type: data.type,
          category: data.category,
          url: data.url,
          summary: data.summary,
          detail,
          features,
        } as Service;
      })
      .sort((a, b) => a.id - b.id);
    
    return services;
  } catch (error) {
    console.error('Error reading services:', error);
    return [];
  }
}

export function getServiceById(id: number): Service | null {
  const services = getAllServices();
  return services.find(service => service.id === id) || null;
}

export function getCategories(): string[] {
  const services = getAllServices();
  return [...new Set(services.map(s => s.category))].sort();
}

export function getOfferTypes(): string[] {
  const services = getAllServices();
  return [...new Set(services.map(s => s.offerType))].sort();
}

export function getTypes(): string[] {
  const services = getAllServices();
  return [...new Set(services.map(s => s.type))].sort();
}
