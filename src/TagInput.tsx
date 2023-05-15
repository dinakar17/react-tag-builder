import React, { useState, CSSProperties } from 'react'

interface TagInputProps {
  defaultTags?: string[]
  inputStyle?: CSSProperties
  tagStyle?: CSSProperties
  onChange?: (tags: string[]) => void
  onClick?: (tag: string) => void
}

const TagInput: React.FC<TagInputProps> = ({ defaultTags = [] }) => {
  const [tags, setTags] = useState<string[]>(defaultTags)

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setTags([...tags, e.currentTarget.value])
      e.currentTarget.value = ''
    } else if (e.key === 'Backspace' && e.currentTarget.value === '') {
      setTags(tags.slice(0, -1))
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className='border border-gray-300 rounded p-2'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className='inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-blue-100 text-blue-800 mr-2 mb-2'
        >
          {tag}
          <button onClick={() => removeTag(index)} className='ml-2 p-1'>
            ×
          </button>
        </span>
      ))}
      <input
        type='text'
        className='outline-none'
        onKeyDown={handleTagInput}
        placeholder='Type a skill and press Enter'
      />
    </div>
  )
}

export default TagInput
