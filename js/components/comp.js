import React from 'react';
import * as actions from '../actions/index';
import store from '../store';

export default function Comp(props) {
    store.dispatch(actions.addRepository('joe'));
    store.dispatch(actions.rateRepository('joe',5));

    let repositories = store.getState().map((repository) => {
        return <div key={repository.name}>{repository.name}... {repository.rating}</div>
    });

    return (
        <div>
            <h1>Repositories App</h1>
            <div>
                {repositories}
            </div>
        </div>
    );
}