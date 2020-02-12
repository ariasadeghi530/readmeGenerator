
function generateMarkdown(data) {


  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribute}

## Test
${data.test}

## Questions
![User Img](${data.avatar_url})

Please ask any questions to ${data.name} at ${data.email}.
`;

}

module.exports = generateMarkdown;
