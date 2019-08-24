const request = require('supertest')
const chai = require('chai')
const app = require('../app')
chai.should()

describe('RegSystem', () => {
    describe('GET /student/:id/timetable', () => {
        it('shuold return timetable', (done) =>{
            request(app).get('/student/1/timetable')
            .expect(200)
            .end((err,res) => {
                let timetable = res.body
                timetable.should.be.an('array')

                res.body[0].should.to.have.property('subjectNo')
                res.body[0].should.to.have.property('subjectName')
                res.body[0].should.to.have.property('subjectTime')
                res.body[0].should.to.have.property('subjectCredit')
                done()
            })
        })
    })
})