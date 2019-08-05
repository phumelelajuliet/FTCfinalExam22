/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { CoTokenContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logging = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('CoTokenContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new CoTokenContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"token 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"token 1002 value"}'));
    });

    describe('#mintFunction', () => {

        it('should return new minted token', async () => {
            await contract._mint(ctx, '1001').should.eventually.be.true;
        });
    });

    describe('#burnFunction', () => {

        it('should burn a token', async () => {
            await contract.burn(ctx, '1003', 'song 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from(''));
        });
    });

    describe('#destroyFunction', () => {

        it('should destroy a token', async () => {
            await contract.destroy(ctx, '1001').should.eventually.deep.equal({ value: '' });
        });
    });

});