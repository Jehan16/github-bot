import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const FILE_PATH = './data.json'

const DATE = moment().subtract(1, 'd').format()

const data = {
    data: DATE
}

jsonfile.writeFile(FILE_PATH, data)

simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push()