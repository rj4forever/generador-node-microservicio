var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    
    prompting() {
        var done = this.async();
        return this.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Service Name',
            default: 'Catalog'
        },
        {
            type: 'input',
            name: 'port',
            message: 'Port',
            default: '9100'
        }
        ]).then(((answers) => {
            this.props = answers;
            this.log('Service:', answers.name);
            this.log('Port:', answers.port);
            done();
        }).bind(this));
    }

    writing() {
        var done = this.async();
        this.fs.copy(
            this.templatePath('.*'),
            this.destinationPath(`${this.props.name.toLowerCase()}-service/`),
            {},
            {},
            {
                openDelimiter: '[',
                closeDelimiter: ']'
            }
        );
        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationPath(`${this.props.name.toLowerCase()}-service/`), {
                name: this.props.name,
                namelower: this.props.name.toLowerCase(),
                port: this.props.port
            },
            {
                openDelimiter: '[',
                closeDelimiter: ']'
            }
        );
        this.fs.copyTpl(
            this.templatePath('*/**/*'),
            this.destinationPath(`${this.props.name.toLowerCase()}-service/`), {
                name: this.props.name,
                namelower: this.props.name.toLowerCase(),
                port: this.props.port
            },
            {
                openDelimiter: '[',
                closeDelimiter: ']'
            }
        );
        done();
    }

    install() {
        var done = this.async();
        this.spawnCommandSync('npm install',[], {'cwd':`${this.props.name}-service/`});
    }

};