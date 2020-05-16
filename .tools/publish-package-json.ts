import * as path from "path";
import * as json from "jsonfile";
//-----------------------------------------------------------------------------
// TsDoc comments :-)
/**
 * Publishes package.json by stripping of these members:
 * * scripts
 * * devDependencies
 *
 * Further it adjusts main and types entry, to reflect new position.
 * Then it copies the package.json to the lib folder.
 */
async function publishPackageJson(): Promise<void> {
    const configFile = path.resolve(__dirname, "..", "package.json");
    const config     = await json.readFile(configFile);

    delete config.scripts;
    delete config.devDependencies;
    delete config.config;
    delete config.files;

    config.main   = "cjs/" + path.basename(config.main);
    config.module = "esm/" + path.basename(config.module);
    // config.types not needed by typescript if the entry is index.js and index.d.ts
    //config.types = path.basename(config.types);

    // Pulling in `color`-package is too heavy for this simple task.
    console.log("\x1b[1;32mpackage.json stitched:\x1b[0m");
    console.dir(config);

    const newConfigFile = path.resolve(__dirname, "..", "lib", "package.json");
    await json.writeFile(newConfigFile, config, { spaces: 4 });
    console.log(`\x1b[1;32mstitched package.json written to ${newConfigFile}\x1b[0m`);
}
//-----------------------------------------------------------------------------
publishPackageJson().catch(e => console.error(e));
