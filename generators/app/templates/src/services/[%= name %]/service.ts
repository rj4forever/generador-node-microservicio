import { I[%= name %]Service } from "./interface";
import [%= name %] from "../../models/[%= name %].model";


/**
 * @export
 * @implements {I[%= name %]ModelService}
 */
const [%= name %]Service: I[%= name %]Service = {
    /**
     * @returns {Promise < any[] >}
     * @memberof [%= name %]Facade
     */
    async findAll(): Promise<any[]> {
        return [%= name %].findAll();
    }
}

export default [%= name %]Service;