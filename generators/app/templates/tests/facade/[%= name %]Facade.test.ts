process.env.NODE_ENV = 'test'

import { expect } from "chai";
import [%= name %]Facade from '../../src/facade/[%= name %]/facade';
import { db } from '../../src/config/connection/database';
import [%= name %] from "../../src/models/[%= name %].model";

describe('[%= name %]Facade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        [%= name %].create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const [%= name %]: any[] = await [%= name %]Facade.findAll();
            expect(1).equal([%= name %].length);
        });
    });
});