import { SUBMIT_COMMENT} from '../constants'

export default store => next => action => {
    switch (action.type) {
        //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
        case SUBMIT_COMMENT:
            next(
                {...action, id: generateUUID()}
            );
    }
}

function generateUUID () { 
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); 
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
