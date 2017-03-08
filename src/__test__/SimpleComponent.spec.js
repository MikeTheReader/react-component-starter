import React from "react";
import renderer from "react-test-renderer";
import SimpleComponent from "../SimpleComponent";

describe("SimpleComponent", function() {
    beforeEach(function() {
        this.component = renderer.create(<SimpleComponent />);
        this.tree = this.component.toJSON();
    });

    it("renders at all", function() {
        expect(this.tree).toBeDefined();
    });

    it("contains Hello World", function() {
        expect(JSON.stringify(this.tree)).toMatch(/Hello World/);
    });
});
