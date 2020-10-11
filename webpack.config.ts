import util from 'util';
import webpack from 'webpack';
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';
import OutputPack from '@packmule/output-pack';
import CleanPack from '@packmule/clean-pack';
import RuntimePack from '@packmule/runtime-pack';
import SassPack from '@packmule/sass-pack';
import JavaScriptPack from '@packmule/javascript-pack';
import TypeScriptPack from '@packmule/typescript-pack';

export default (): webpack.Configuration => {
    const packmule = new Packmule('production');

    packmule.add(new EntryPack('assets/main.ts'));
    packmule.add(new OutputPack('dist/', '/dist/'));
    packmule.add(new CleanPack());
    packmule.add(new RuntimePack());
    packmule.add(new SassPack());
    packmule.add(new JavaScriptPack());
    packmule.add(new TypeScriptPack());

    const config = packmule.generate();

    console.log(util.inspect(config, {
        showHidden: false,
        depth: null,
    }));

    return config;
};
