import cvData from '../assets/data/cv.json'

export function useCV() {
  const sections = cvData.cv

  const getSectionById = (id) => {
    return sections.find(section => section.id === id)
  }

  return {
    sections,
    getSectionById
  }
}
