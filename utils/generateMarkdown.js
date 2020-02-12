function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents


`;
}

module.exports = generateMarkdown;
