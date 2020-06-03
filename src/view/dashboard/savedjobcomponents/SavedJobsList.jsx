import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import JobController from '@controllers/JobController.js';
import {selectSavedJobList} from '@state/selectors.js';
import {selectUser} from '@state/selectors.js';

import SavedJob from './SavedJob.jsx';

const SavedJobList = () => {
    const savedJobList = useSelector(selectSavedJobList);
    const id = useSelector(selectUser).id

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    }, []);

    return(
        <div>
            <h2>Saved Jobs</h2>
            {savedJobList && savedJobList.map(job => {
                return <SavedJob job={job} key={job.id} />
            })}
        </div>
    )
}

export default SavedJobList;