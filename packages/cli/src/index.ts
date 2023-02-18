import { program } from '@commander-js/extra-typings';

import { startCommand } from './commands';

program.name('codui').description('codui CLI').addCommand(startCommand);
program.parse();
