import React, { useState } from 'react';

interface Version {
  technology: string;
  version: string;
}

const TechVersionDropdown: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

  const technologies = ['React', 'Angular', 'Vue']; // Add your technologies here
  const versions: Record<string, string[]> = {
    React: ['16.0', '17.0'],
    Angular: ['2.0', '4.0', '8.0'],
    Vue: ['2.0', '3.0'],
  };

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);
    setSelectedVersion(null);
  };

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
  };

  return (
    <div>
      <label>Tech Stack:</label>
      <select onChange={(e) => handleTechChange(e.target.value)}>
        <option value="">Select</option>
        {technologies.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>

      {selectedTech && (
        <div>
          <label>Version:</label>
          <select onChange={(e) => handleVersionChange(e.target.value)}>
            <option value="">Select</option>
            {versions[selectedTech].map((version) => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label>Selected Tech:</label>
        <input
          type="text"
          readOnly
          value={`${selectedTech || ''} ${selectedVersion || ''}`}
        />
      </div>
    </div>
  );
};

export default TechVersionDropdown;
