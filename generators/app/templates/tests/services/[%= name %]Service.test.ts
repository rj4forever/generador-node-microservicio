process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { [%= name %]Service } from "../../src/services";
import { db } from '../../src/config/connection/database';
import [%= name %] from "../../src/models/[%= name %].model";

describe('[%= name %]Service Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
    [%= name %].create({
      id: 1,
      name: 'test',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
    [%= name %].create({
      id: 2,
      name: 'test2',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
  });

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const [%= name %]: any[] = await [%= name %]Service.findAll();
      expect(2).equal([%= name %].length);
    });
  });

});