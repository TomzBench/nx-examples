import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { PluginsExampleSchematicSchema } from './schema';

describe('plugins-example schematic', () => {
  let appTree: Tree;
  const options: PluginsExampleSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@nx-example/plugins-example',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('plugins-example', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
