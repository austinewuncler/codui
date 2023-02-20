#!/usr/bin/env node
import { program } from '@commander-js/extra-typings';

import { startCommand } from './commands';

program.name('codui').description('codui CLI').addCommand(startCommand);
void program.parseAsync();
