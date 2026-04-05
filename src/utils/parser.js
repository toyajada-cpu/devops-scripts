const fs = require('fs');
const path = require('path');
const { parse } = require('ini');

module.exports = class Parser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async parse() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      const config = parse(data);

      if (config) {
        const sections = Object.keys(config);

        return sections.map(section => {
          const properties = Object.keys(config[section]);
          return properties.map(property => {
            return {
              section,
              property,
              value: config[section][property]
            };
          });
        }).flat();
      }

      return [];
    } catch (error) {
      throw new Error(`Error parsing file: ${error.message}`);
    }
  }
};