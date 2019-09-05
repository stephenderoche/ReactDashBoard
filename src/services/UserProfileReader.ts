import { Store } from 'redux';
import { userProfileReadCompleted } from '../store/actions';
import { IApplicationState, IUserProfile } from '../store/states';

const profileFile = process.env.NODE_ENV === 'development' ? '/userProfile.dev.json' : '/userProfile.json';


export function readUserProfileFromFile(store: Store<IApplicationState>) {

    // TODO:  Replace with a call to navigation service or context service
    fetch(profileFile).then((response) => {
        // console.log('Response: ', response);

        response.json().then((profile: IUserProfile) => {
            // console.log('Layout file: ', layout);

            const action: any = userProfileReadCompleted(profile);

            store.dispatch(action);

        });
    });
}