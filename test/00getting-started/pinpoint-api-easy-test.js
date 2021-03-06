

var vows = require('vows'),
    assert = require('assert'),
    APIeasy = require('api-easy'),
    helpers = require('./../helpers');
    
helpers.addPinpoint('00getting-started');

var pinpoint = require('pinpoint');

var tests = APIeasy.describe('00getting-started');

tests.suite.addBatch(helpers.requiresInit(8000));

tests.use('localhost', 8000)
     .get().expect(501, { message: 'not implemented' })
     .export(module);

