import React, {Component} from "react";
import factory from "../entities/factory";

class MainPage extends Component {
    static async getInitialProps() {
        const USERS = await factory.methods.GetUsers().call();
        const VEHICLES = await factory.methods.GetVehicles().call();
        return {USERS, VEHICLES};
    }

    render() {
        return (
            <div>
                <h3>Vehicles</h3>
            </div>
        );
    }
}

export default MainPage;
