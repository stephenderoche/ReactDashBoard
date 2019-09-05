import { Store } from 'redux';
import { layoutReadCompleted } from '../store/actions';
import { IApplicationState, ILayout } from '../store/states';

const layoutFile = process.env.NODE_ENV === 'development' ? '/layout.dev.json' : '/layout.json';

export function readLayoutFromFile(store: Store<IApplicationState>) {

    // TODO:  Replace with a call to navigation service or context service
    fetch(layoutFile).then((response) => {
        // console.log('Response: ', response);

        response.json().then((layout: ILayout) => {
            // console.log('Layout file: ', layout);

            const action: any = layoutReadCompleted(layout);

            store.dispatch(action);

        });
    });
}