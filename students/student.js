class students {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.timetable = []

    }

    addTimetable(subjectNo,subjectName,subjectTime,subjectCredit){
        this.timetable.push({subjectNo: subjectNo,
                        subjectName: subjectName,
                        subjectTime: subjectTime,
                        subjectCredit: subjectCredit})
    }
}

let s = new students(1,'NeMo')
s.addTimetable('001','Sex Education Lab','18:00-20:00','0-2-6')



function getTimetable(id){
    return s.timetable
}

module.exports.getTimetable = getTimetable