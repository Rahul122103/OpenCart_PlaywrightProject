import fs from 'fs'
import { parse } from 'csv-parse/sync'



export class dataProvider {


    static gettestdatajson(filepath: string) {


        const jsondata = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
        return jsondata
    }


    static gettestdatacsv(filepath: string) {

        const csvdata: any = parse(fs.readFileSync(filepath, 'utf-8'), {
            columns: true,
            skip_empty_lines: true
        })
        return csvdata
    }



}


