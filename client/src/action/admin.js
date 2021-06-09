import * as api from '../api/index';

// Action Creators

export const fetchTeachers = () => async(dispatch) => {
    try {
        const { data } = await api.fetchTeachers();
        const action = { type: 'FETCH_ALL', payload: data}
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createTeacher = (newMember) => async (dispatch) => {
    try {
        const { data } = await api.createTeacher(newMember); 
        dispatch({ type: 'CREATE_MEMBER', payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updateTeacher = (id, update) => async (dispatch) => {
    try {
        const { data } = await api.updateTeacher(id, update)
        dispatch( {type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteTeacher = (id) => async (dispatch) => {
    try {
        await api.deleteTeacher(id);
        dispatch( { type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}



export const fetchStudents = () => async(dispatch) => {
    try {
        const { data } = await api.fetchStudents();
        const action = { type: 'FETCH_ALL', payload: data}
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createStudent = (newMember) => async (dispatch) => {
    try {
        const { data } = await api.createStudent(newMember); 
        dispatch({ type: 'CREATE_MEMBER', payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updateStudent = (id, update) => async (dispatch) => {
    try {
        const { data } = await api.updateStudent(id, update)
        dispatch( {type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await api.deleteStudent(id);
        dispatch( { type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const sortByDept = (dept) =>  async (dispatch) => {
    try {
        const { data } = await api.fetchStudents();
        switch (dept) {
            case "BCA":
                dispatch( { type: 'SORT_BY_DEPT_BCA', payload: data })
                break;
                case "BSc":
                dispatch( { type: 'SORT_BY_DEPT_BSc', payload: data })
                break;
                default:
                break;
        }
    } catch (error) {
        console.log(error)
    }
}