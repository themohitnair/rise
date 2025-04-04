import fs from 'fs/promises'
import path from 'path'
import { Utility } from '@/types/utility'

const dataFilePath = path.join(process.cwd(), 'data', 'utilities.json')

export async function getUtilities(): Promise<Utility[]> {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    // If file doesn't exist, return empty array
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.mkdir(path.dirname(dataFilePath), { recursive: true })
      await fs.writeFile(dataFilePath, JSON.stringify([], null, 2))
      return []
    }
    throw error
  }
}

export async function saveUtilities(utilities: Utility[]): Promise<void> {
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true })
  await fs.writeFile(dataFilePath, JSON.stringify(utilities, null, 2))
}

export async function addUtility(utility: Omit<Utility, 'id'>): Promise<Utility> {
  const utilities = await getUtilities()
  
  const newUtility = {
    ...utility,
    id: Date.now().toString(),
  }
  
  utilities.push(newUtility)
  await saveUtilities(utilities)
  
  return newUtility
}

export async function updateUtility(id: string, utility: Partial<Utility>): Promise<Utility | null> {
  const utilities = await getUtilities()
  
  const index = utilities.findIndex(u => u.id === id)
  if (index === -1) return null
  
  utilities[index] = { ...utilities[index], ...utility }
  await saveUtilities(utilities)
  
  return utilities[index]
}

export async function deleteUtility(id: string): Promise<boolean> {
  const utilities = await getUtilities()
  
  const filteredUtilities = utilities.filter(u => u.id !== id)
  if (filteredUtilities.length === utilities.length) return false
  
  await saveUtilities(filteredUtilities)
  return true
}
