//enzyme
import { mount, render, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import chaiEnzyme from 'chai-enzyme';
//chai
import chai, { expect } from 'chai';
//mocha
import { describe, beforeEach, it } from 'mocha';
//js dom setup
require('jsdom-global')();

//enzyme configurations
configure({
	adapter: new Adapter(),
});

//chai assertion for enzyme
chai.use(chaiEnzyme());

/**************** set global functions ****************/
//chai
global.expect = expect;
//mocha
global.describe = describe;
global.beforeEach = beforeEach;
global.it = it;
//enzyme
global.mount = mount;
global.render = render;
global.shallow = shallow;
