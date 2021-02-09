import { alert, notice, info, success, error, defaultModules, Stack, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

function creatNotice(countriesArray) {
    const noticeOptions = notice({
        text: "Введите больше букв.",
        width: '300px',
        icons: 'material',
        styling: 'material',
    });

    if (countriesArray.length > 10) {
        noticeOptions;
        return;
    }
    noticeOptions.close(this);

}

export default creatNotice;
