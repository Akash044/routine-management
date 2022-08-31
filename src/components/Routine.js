import React, { useEffect } from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday']
const periods = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
const series = ['17 series', '18 series', '19 series', '20 series', '21 series']
const times = ['8:00am-8:50am', '8:50am-9:40am', '9:40am-10:30am', '10:50am-11:40am', '11:40am-12:30pm', '12:30pm-1:20pm', '2:30pm-3:20pm', '3:20pm-4:10pm', '4:10pm-5:00pm']

const Routine = () => {


    const [seriesName, setSeriesName] = useState('')
    const [dayName, setDayName] = useState('')
    const [periodName, setPeriodName] = useState('')
    const [courseNo, setCourseNo] = useState('')
    const [teacherID, setTeacherID] = useState('')
    const [roomNo, setRoomNo] = useState('')

    useEffect(() => {
        fetch('http://localhost:8085/routineInfoPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tableData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    const [tableData, setTableData] = useState({
        series17: {

            //Saturday
            Saturday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Saturday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Sunday
            Sunday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Sunday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Monday
            Monday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Monday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },





            //Tuesday
            Tuesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Tuesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Wednesday
            Wednesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Wednesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },


        },

        //for 18 series
        series18: {

            //Saturday
            Saturday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Saturday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Sunday
            Sunday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Sunday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Monday
            Monday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Monday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },





            //Tuesday
            Tuesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Tuesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Wednesday
            Wednesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Wednesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },


        },
        //for 19 series
        series19: {

            //Saturday
            Saturday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Saturday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Sunday
            Sunday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Sunday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Monday
            Monday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Monday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },





            //Tuesday
            Tuesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Tuesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Wednesday
            Wednesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Wednesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },


        },
        series20: {

            //Saturday
            Saturday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Saturday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Sunday
            Sunday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Sunday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Monday
            Monday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Monday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },





            //Tuesday
            Tuesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Tuesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Wednesday
            Wednesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Wednesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },


        },
        series21: {

            //Saturday
            Saturday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Saturday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Saturday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Saturday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Saturday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Sunday
            Sunday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Sunday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Sunday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Sunday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Sunday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Monday
            Monday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Monday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Monday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Monday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Monday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },





            //Tuesday
            Tuesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Tuesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Tuesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Tuesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Tuesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },



            //Wednesday
            Wednesday1st: {
                courseNo: "CSE 4101",
                teacherID: "NS/FP",
                roomNo: "101",
            },
            Wednesday2nd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday3rd: {
                courseNo: "CSE 4107",
                teacherID: "MRI",
                roomNo: "101",
            },
            Wednesday4th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday5th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday6th: {
                courseNo: "CSE 4108",
                teacherID: "MRI",
                roomNo: "OS Lab",
            },
            Wednesday7th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday8th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },
            Wednesday9th: {
                courseNo: "CSE 4000",
                teacherID: "",
                roomNo: "",
            },


        }
    })

    const handleOnClickSeries = (series) => {
        console.log(series)
        const aa = series.split(' ')
        const add = aa[1] + aa[0]

        setSeriesName(add)
    }
    const handleOnClickDay = (day) => {
        console.log(day)
        setDayName(day)
    }
    const handleOnClickPeriod = (period) => {
        console.log(period)
        setPeriodName(period)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const attr = dayName + periodName

        // const series = 'series17'
        console.log(seriesName, attr)

        tableData[seriesName][attr].courseNo = courseNo
        tableData[seriesName][attr].teacherID = teacherID
        tableData[seriesName][attr].roomNo = roomNo

        setTableData({ ...tableData })


    }
    console.log(tableData)
    return (
        <div>
            <div>
                <table border="1" style={{ margin: 10 }}>
                    <tr>
                        <th>Series: </th>
                        {
                            series.map(series => {
                                const aa = series.split(' ')
                                const add = aa[1] + aa[0]
                                const selected = add === seriesName
                                // console.log(selected)
                                return (
                                    <>
                                        {selected ?
                                            <th key={series} style={{ cursor: 'pointer', backgroundColor: 'cyan' }} onClick={() => handleOnClickSeries(series)}>
                                                {series}
                                            </th>
                                            :
                                            <th key={series} style={{ cursor: 'pointer', }} onClick={() => handleOnClickSeries(series)}>
                                                {series}
                                            </th>}
                                    </>
                                )
                            }
                            )
                        }
                    </tr>
                </table>
            </div>
            <div>
                <table border="1" style={{ margin: 10 }}>
                    <tr>
                        <th>Day: </th>
                        {
                            days.map(day => {
                                const selected = day === dayName
                                return (
                                    <>
                                        {selected ?
                                            <th key={day} style={{ cursor: 'pointer', backgroundColor: 'green' }} onClick={() => handleOnClickDay(day)}>{day}</th>
                                            :
                                            <th key={day} style={{ cursor: 'pointer' }} onClick={() => handleOnClickDay(day)}>{day}</th>
                                        }
                                    </>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>

            <div>
                <table border="1" style={{ margin: 10 }}>
                    <tr>
                        <th>Period: </th>
                        {
                            periods.map(period => {
                                const selected = period === periodName
                                return (
                                    <>
                                        {
                                            selected ?
                                                <th key={period} style={{ cursor: 'pointer', backgroundColor: 'red' }} onClick={() => handleOnClickPeriod(period)}>{period}</th>
                                                :
                                                <th key={period} style={{ cursor: 'pointer' }} onClick={() => handleOnClickPeriod(period)}>{period}</th>
                                        }
                                    </>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>
            <div style={{ margin: 10 }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input required type="text" placeholder="enter course No" onChange={(e) => setCourseNo(e.target.value)} />
                    <input required type="text" placeholder="enter course teacher ID" onChange={(e) => setTeacherID(e.target.value)} />
                    <input required type="text" placeholder="enter room no" onChange={(e) => setRoomNo(e.target.value)} />
                    <input type="submit" />
                </form>
            </div>
            <Table border="1" striped bordered hover>
                <thead>
                    <tr >
                        <th>Day</th>
                        {
                            days.map(day =>

                                <th key={day} colSpan={9}>{day}</th>


                            )
                        }
                        {/* <th colSpan={9}>Saturday</th>
                        <th colSpan={9}>Sunday</th> */}

                    </tr>
                </thead>
                <thead>
                    <tr >
                        <th>Period</th>
                        {
                            periods.map(period => <th key={period}>{period}</th>)
                        }
                        {
                            periods.map(period => <th key={period}>{period}</th>)
                        }
                        {
                            periods.map(period => <th key={period}>{period}</th>)
                        }
                        {
                            periods.map(period => <th key={period}>{period}</th>)
                        }
                        {
                            periods.map(period => <th key={period}>{period}</th>)
                        }

                    </tr>
                    {/* <tr >
                        {
                            periods.map(period => <th key={period}>{period}</th>)
                        }
                    </tr> */}
                </thead>
                <thead>
                    <tr >
                        <th>Time</th>
                        {
                            times.map(time => <th key={time}>{time}</th>)
                        }
                        {
                            times.map(time => <th key={time}>{time}</th>)
                        }
                        {
                            times.map(time => <th key={time}>{time}</th>)
                        }
                        {
                            times.map(time => <th key={time}>{time}</th>)
                        }
                        {
                            times.map(time => <th key={time}>{time}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>17 Series</td>
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series17.Saturday1st.courseNo}<br />
                                {tableData.series17.Saturday1st.teacherID}<br />
                                {tableData.series17.Saturday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday2nd.courseNo}<br />
                                {tableData.series17.Saturday2nd.teacherID}<br />
                                {tableData.series17.Saturday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday3rd.courseNo}<br />
                                {tableData.series17.Saturday3rd.teacherID}<br />
                                {tableData.series17.Saturday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday4th.courseNo}<br />
                                {tableData.series17.Saturday4th.teacherID}<br />
                                {tableData.series17.Saturday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday5th.courseNo}<br />
                                {tableData.series17.Saturday5th.teacherID}<br />
                                {tableData.series17.Saturday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday6th.courseNo}<br />
                                {tableData.series17.Saturday6th.teacherID}<br />
                                {tableData.series17.Saturday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday7th.courseNo}<br />
                                {tableData.series17.Saturday7th.teacherID}<br />
                                {tableData.series17.Saturday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday8th.courseNo}<br />
                                {tableData.series17.Saturday8th.teacherID}<br />
                                {tableData.series17.Saturday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Saturday9th.courseNo}<br />
                                {tableData.series17.Saturday9th.teacherID}<br />
                                {tableData.series17.Saturday9th.roomNo}
                            </p>
                        </td>

                        {/* for sunday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series17.Sunday1st.courseNo}<br />
                                {tableData.series17.Sunday1st.teacherID}<br />
                                {tableData.series17.Sunday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday2nd.courseNo}<br />
                                {tableData.series17.Sunday2nd.teacherID}<br />
                                {tableData.series17.Sunday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday3rd.courseNo}<br />
                                {tableData.series17.Sunday3rd.teacherID}<br />
                                {tableData.series17.Sunday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday4th.courseNo}<br />
                                {tableData.series17.Sunday4th.teacherID}<br />
                                {tableData.series17.Sunday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday5th.courseNo}<br />
                                {tableData.series17.Sunday5th.teacherID}<br />
                                {tableData.series17.Sunday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday6th.courseNo}<br />
                                {tableData.series17.Sunday6th.teacherID}<br />
                                {tableData.series17.Sunday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday7th.courseNo}<br />
                                {tableData.series17.Sunday7th.teacherID}<br />
                                {tableData.series17.Sunday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday8th.courseNo}<br />
                                {tableData.series17.Sunday8th.teacherID}<br />
                                {tableData.series17.Sunday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Sunday9th.courseNo}<br />
                                {tableData.series17.Sunday9th.teacherID}<br />
                                {tableData.series17.Sunday9th.roomNo}
                            </p>
                        </td>

                        {/* for monday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series17.Monday1st.courseNo}<br />
                                {tableData.series17.Monday1st.teacherID}<br />
                                {tableData.series17.Monday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday2nd.courseNo}<br />
                                {tableData.series17.Monday2nd.teacherID}<br />
                                {tableData.series17.Monday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday3rd.courseNo}<br />
                                {tableData.series17.Monday3rd.teacherID}<br />
                                {tableData.series17.Monday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday4th.courseNo}<br />
                                {tableData.series17.Monday4th.teacherID}<br />
                                {tableData.series17.Monday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday5th.courseNo}<br />
                                {tableData.series17.Monday5th.teacherID}<br />
                                {tableData.series17.Monday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday6th.courseNo}<br />
                                {tableData.series17.Monday6th.teacherID}<br />
                                {tableData.series17.Monday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday7th.courseNo}<br />
                                {tableData.series17.Monday7th.teacherID}<br />
                                {tableData.series17.Monday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday8th.courseNo}<br />
                                {tableData.series17.Monday8th.teacherID}<br />
                                {tableData.series17.Monday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Monday9th.courseNo}<br />
                                {tableData.series17.Monday9th.teacherID}<br />
                                {tableData.series17.Monday9th.roomNo}
                            </p>
                        </td>

                        {/* for tuesday                         */}


                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series17.Tuesday1st.courseNo}<br />
                                {tableData.series17.Tuesday1st.teacherID}<br />
                                {tableData.series17.Tuesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday2nd.courseNo}<br />
                                {tableData.series17.Tuesday2nd.teacherID}<br />
                                {tableData.series17.Tuesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday3rd.courseNo}<br />
                                {tableData.series17.Tuesday3rd.teacherID}<br />
                                {tableData.series17.Tuesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday4th.courseNo}<br />
                                {tableData.series17.Tuesday4th.teacherID}<br />
                                {tableData.series17.Tuesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday5th.courseNo}<br />
                                {tableData.series17.Tuesday5th.teacherID}<br />
                                {tableData.series17.Tuesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday6th.courseNo}<br />
                                {tableData.series17.Tuesday6th.teacherID}<br />
                                {tableData.series17.Tuesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday7th.courseNo}<br />
                                {tableData.series17.Tuesday7th.teacherID}<br />
                                {tableData.series17.Tuesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday8th.courseNo}<br />
                                {tableData.series17.Tuesday8th.teacherID}<br />
                                {tableData.series17.Tuesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Tuesday9th.courseNo}<br />
                                {tableData.series17.Tuesday9th.teacherID}<br />
                                {tableData.series17.Tuesday9th.roomNo}
                            </p>
                        </td>


                        {/* for Wednesday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series17.Wednesday1st.courseNo}<br />
                                {tableData.series17.Wednesday1st.teacherID}<br />
                                {tableData.series17.Wednesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday2nd.courseNo}<br />
                                {tableData.series17.Wednesday2nd.teacherID}<br />
                                {tableData.series17.Wednesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday3rd.courseNo}<br />
                                {tableData.series17.Wednesday3rd.teacherID}<br />
                                {tableData.series17.Wednesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday4th.courseNo}<br />
                                {tableData.series17.Wednesday4th.teacherID}<br />
                                {tableData.series17.Wednesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday5th.courseNo}<br />
                                {tableData.series17.Wednesday5th.teacherID}<br />
                                {tableData.series17.Wednesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday6th.courseNo}<br />
                                {tableData.series17.Wednesday6th.teacherID}<br />
                                {tableData.series17.Wednesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday7th.courseNo}<br />
                                {tableData.series17.Wednesday7th.teacherID}<br />
                                {tableData.series17.Wednesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday8th.courseNo}<br />
                                {tableData.series17.Wednesday8th.teacherID}<br />
                                {tableData.series17.Wednesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series17.Wednesday9th.courseNo}<br />
                                {tableData.series17.Wednesday9th.teacherID}<br />
                                {tableData.series17.Wednesday9th.roomNo}
                            </p>
                        </td>


                    </tr>



                    <tr>
                        <td>18 Series</td>
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series18.Saturday1st.courseNo}<br />
                                {tableData.series18.Saturday1st.teacherID}<br />
                                {tableData.series18.Saturday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday2nd.courseNo}<br />
                                {tableData.series18.Saturday2nd.teacherID}<br />
                                {tableData.series18.Saturday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday3rd.courseNo}<br />
                                {tableData.series18.Saturday3rd.teacherID}<br />
                                {tableData.series18.Saturday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday4th.courseNo}<br />
                                {tableData.series18.Saturday4th.teacherID}<br />
                                {tableData.series18.Saturday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday5th.courseNo}<br />
                                {tableData.series18.Saturday5th.teacherID}<br />
                                {tableData.series18.Saturday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday6th.courseNo}<br />
                                {tableData.series18.Saturday6th.teacherID}<br />
                                {tableData.series18.Saturday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday7th.courseNo}<br />
                                {tableData.series18.Saturday7th.teacherID}<br />
                                {tableData.series18.Saturday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday8th.courseNo}<br />
                                {tableData.series18.Saturday8th.teacherID}<br />
                                {tableData.series18.Saturday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Saturday9th.courseNo}<br />
                                {tableData.series18.Saturday9th.teacherID}<br />
                                {tableData.series18.Saturday9th.roomNo}
                            </p>
                        </td>

                        {/* for sunday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series18.Sunday1st.courseNo}<br />
                                {tableData.series18.Sunday1st.teacherID}<br />
                                {tableData.series18.Sunday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday2nd.courseNo}<br />
                                {tableData.series18.Sunday2nd.teacherID}<br />
                                {tableData.series18.Sunday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday3rd.courseNo}<br />
                                {tableData.series18.Sunday3rd.teacherID}<br />
                                {tableData.series18.Sunday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday4th.courseNo}<br />
                                {tableData.series18.Sunday4th.teacherID}<br />
                                {tableData.series18.Sunday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday5th.courseNo}<br />
                                {tableData.series18.Sunday5th.teacherID}<br />
                                {tableData.series18.Sunday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday6th.courseNo}<br />
                                {tableData.series18.Sunday6th.teacherID}<br />
                                {tableData.series18.Sunday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday7th.courseNo}<br />
                                {tableData.series18.Sunday7th.teacherID}<br />
                                {tableData.series18.Sunday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday8th.courseNo}<br />
                                {tableData.series18.Sunday8th.teacherID}<br />
                                {tableData.series18.Sunday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Sunday9th.courseNo}<br />
                                {tableData.series18.Sunday9th.teacherID}<br />
                                {tableData.series18.Sunday9th.roomNo}
                            </p>
                        </td>

                        {/* for monday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series18.Monday1st.courseNo}<br />
                                {tableData.series18.Monday1st.teacherID}<br />
                                {tableData.series18.Monday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday2nd.courseNo}<br />
                                {tableData.series18.Monday2nd.teacherID}<br />
                                {tableData.series18.Monday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday3rd.courseNo}<br />
                                {tableData.series18.Monday3rd.teacherID}<br />
                                {tableData.series18.Monday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday4th.courseNo}<br />
                                {tableData.series18.Monday4th.teacherID}<br />
                                {tableData.series18.Monday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday5th.courseNo}<br />
                                {tableData.series18.Monday5th.teacherID}<br />
                                {tableData.series18.Monday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday6th.courseNo}<br />
                                {tableData.series18.Monday6th.teacherID}<br />
                                {tableData.series18.Monday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday7th.courseNo}<br />
                                {tableData.series18.Monday7th.teacherID}<br />
                                {tableData.series18.Monday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday8th.courseNo}<br />
                                {tableData.series18.Monday8th.teacherID}<br />
                                {tableData.series18.Monday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Monday9th.courseNo}<br />
                                {tableData.series18.Monday9th.teacherID}<br />
                                {tableData.series18.Monday9th.roomNo}
                            </p>
                        </td>

                        {/* for tuesday                         */}


                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series18.Tuesday1st.courseNo}<br />
                                {tableData.series18.Tuesday1st.teacherID}<br />
                                {tableData.series18.Tuesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday2nd.courseNo}<br />
                                {tableData.series18.Tuesday2nd.teacherID}<br />
                                {tableData.series18.Tuesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday3rd.courseNo}<br />
                                {tableData.series18.Tuesday3rd.teacherID}<br />
                                {tableData.series18.Tuesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday4th.courseNo}<br />
                                {tableData.series18.Tuesday4th.teacherID}<br />
                                {tableData.series18.Tuesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday5th.courseNo}<br />
                                {tableData.series18.Tuesday5th.teacherID}<br />
                                {tableData.series18.Tuesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday6th.courseNo}<br />
                                {tableData.series18.Tuesday6th.teacherID}<br />
                                {tableData.series18.Tuesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday7th.courseNo}<br />
                                {tableData.series18.Tuesday7th.teacherID}<br />
                                {tableData.series18.Tuesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday8th.courseNo}<br />
                                {tableData.series18.Tuesday8th.teacherID}<br />
                                {tableData.series18.Tuesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Tuesday9th.courseNo}<br />
                                {tableData.series18.Tuesday9th.teacherID}<br />
                                {tableData.series18.Tuesday9th.roomNo}
                            </p>
                        </td>


                        {/* for Wednesday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series18.Wednesday1st.courseNo}<br />
                                {tableData.series18.Wednesday1st.teacherID}<br />
                                {tableData.series18.Wednesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday2nd.courseNo}<br />
                                {tableData.series18.Wednesday2nd.teacherID}<br />
                                {tableData.series18.Wednesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday3rd.courseNo}<br />
                                {tableData.series18.Wednesday3rd.teacherID}<br />
                                {tableData.series18.Wednesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday4th.courseNo}<br />
                                {tableData.series18.Wednesday4th.teacherID}<br />
                                {tableData.series18.Wednesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday5th.courseNo}<br />
                                {tableData.series18.Wednesday5th.teacherID}<br />
                                {tableData.series18.Wednesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday6th.courseNo}<br />
                                {tableData.series18.Wednesday6th.teacherID}<br />
                                {tableData.series18.Wednesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday7th.courseNo}<br />
                                {tableData.series18.Wednesday7th.teacherID}<br />
                                {tableData.series18.Wednesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday8th.courseNo}<br />
                                {tableData.series18.Wednesday8th.teacherID}<br />
                                {tableData.series18.Wednesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series18.Wednesday9th.courseNo}<br />
                                {tableData.series18.Wednesday9th.teacherID}<br />
                                {tableData.series18.Wednesday9th.roomNo}
                            </p>
                        </td>


                    </tr>



                    <tr>
                        <td>19 Series</td>
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series19.Saturday1st.courseNo}<br />
                                {tableData.series19.Saturday1st.teacherID}<br />
                                {tableData.series19.Saturday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday2nd.courseNo}<br />
                                {tableData.series19.Saturday2nd.teacherID}<br />
                                {tableData.series19.Saturday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday3rd.courseNo}<br />
                                {tableData.series19.Saturday3rd.teacherID}<br />
                                {tableData.series19.Saturday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday4th.courseNo}<br />
                                {tableData.series19.Saturday4th.teacherID}<br />
                                {tableData.series19.Saturday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday5th.courseNo}<br />
                                {tableData.series19.Saturday5th.teacherID}<br />
                                {tableData.series19.Saturday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday6th.courseNo}<br />
                                {tableData.series19.Saturday6th.teacherID}<br />
                                {tableData.series19.Saturday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday7th.courseNo}<br />
                                {tableData.series19.Saturday7th.teacherID}<br />
                                {tableData.series19.Saturday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday8th.courseNo}<br />
                                {tableData.series19.Saturday8th.teacherID}<br />
                                {tableData.series19.Saturday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Saturday9th.courseNo}<br />
                                {tableData.series19.Saturday9th.teacherID}<br />
                                {tableData.series19.Saturday9th.roomNo}
                            </p>
                        </td>

                        {/* for sunday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series19.Sunday1st.courseNo}<br />
                                {tableData.series19.Sunday1st.teacherID}<br />
                                {tableData.series19.Sunday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday2nd.courseNo}<br />
                                {tableData.series19.Sunday2nd.teacherID}<br />
                                {tableData.series19.Sunday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday3rd.courseNo}<br />
                                {tableData.series19.Sunday3rd.teacherID}<br />
                                {tableData.series19.Sunday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday4th.courseNo}<br />
                                {tableData.series19.Sunday4th.teacherID}<br />
                                {tableData.series19.Sunday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday5th.courseNo}<br />
                                {tableData.series19.Sunday5th.teacherID}<br />
                                {tableData.series19.Sunday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday6th.courseNo}<br />
                                {tableData.series19.Sunday6th.teacherID}<br />
                                {tableData.series19.Sunday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday7th.courseNo}<br />
                                {tableData.series19.Sunday7th.teacherID}<br />
                                {tableData.series19.Sunday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday8th.courseNo}<br />
                                {tableData.series19.Sunday8th.teacherID}<br />
                                {tableData.series19.Sunday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Sunday9th.courseNo}<br />
                                {tableData.series19.Sunday9th.teacherID}<br />
                                {tableData.series19.Sunday9th.roomNo}
                            </p>
                        </td>

                        {/* for monday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series19.Monday1st.courseNo}<br />
                                {tableData.series19.Monday1st.teacherID}<br />
                                {tableData.series19.Monday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday2nd.courseNo}<br />
                                {tableData.series19.Monday2nd.teacherID}<br />
                                {tableData.series19.Monday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday3rd.courseNo}<br />
                                {tableData.series19.Monday3rd.teacherID}<br />
                                {tableData.series19.Monday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday4th.courseNo}<br />
                                {tableData.series19.Monday4th.teacherID}<br />
                                {tableData.series19.Monday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday5th.courseNo}<br />
                                {tableData.series19.Monday5th.teacherID}<br />
                                {tableData.series19.Monday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday6th.courseNo}<br />
                                {tableData.series19.Monday6th.teacherID}<br />
                                {tableData.series19.Monday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday7th.courseNo}<br />
                                {tableData.series19.Monday7th.teacherID}<br />
                                {tableData.series19.Monday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday8th.courseNo}<br />
                                {tableData.series19.Monday8th.teacherID}<br />
                                {tableData.series19.Monday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Monday9th.courseNo}<br />
                                {tableData.series19.Monday9th.teacherID}<br />
                                {tableData.series19.Monday9th.roomNo}
                            </p>
                        </td>

                        {/* for tuesday                         */}


                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series19.Tuesday1st.courseNo}<br />
                                {tableData.series19.Tuesday1st.teacherID}<br />
                                {tableData.series19.Tuesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday2nd.courseNo}<br />
                                {tableData.series19.Tuesday2nd.teacherID}<br />
                                {tableData.series19.Tuesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday3rd.courseNo}<br />
                                {tableData.series19.Tuesday3rd.teacherID}<br />
                                {tableData.series19.Tuesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday4th.courseNo}<br />
                                {tableData.series19.Tuesday4th.teacherID}<br />
                                {tableData.series19.Tuesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday5th.courseNo}<br />
                                {tableData.series19.Tuesday5th.teacherID}<br />
                                {tableData.series19.Tuesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday6th.courseNo}<br />
                                {tableData.series19.Tuesday6th.teacherID}<br />
                                {tableData.series19.Tuesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday7th.courseNo}<br />
                                {tableData.series19.Tuesday7th.teacherID}<br />
                                {tableData.series19.Tuesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday8th.courseNo}<br />
                                {tableData.series19.Tuesday8th.teacherID}<br />
                                {tableData.series19.Tuesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Tuesday9th.courseNo}<br />
                                {tableData.series19.Tuesday9th.teacherID}<br />
                                {tableData.series19.Tuesday9th.roomNo}
                            </p>
                        </td>


                        {/* for Wednesday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series19.Wednesday1st.courseNo}<br />
                                {tableData.series19.Wednesday1st.teacherID}<br />
                                {tableData.series19.Wednesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday2nd.courseNo}<br />
                                {tableData.series19.Wednesday2nd.teacherID}<br />
                                {tableData.series19.Wednesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday3rd.courseNo}<br />
                                {tableData.series19.Wednesday3rd.teacherID}<br />
                                {tableData.series19.Wednesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday4th.courseNo}<br />
                                {tableData.series19.Wednesday4th.teacherID}<br />
                                {tableData.series19.Wednesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday5th.courseNo}<br />
                                {tableData.series19.Wednesday5th.teacherID}<br />
                                {tableData.series19.Wednesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday6th.courseNo}<br />
                                {tableData.series19.Wednesday6th.teacherID}<br />
                                {tableData.series19.Wednesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday7th.courseNo}<br />
                                {tableData.series19.Wednesday7th.teacherID}<br />
                                {tableData.series19.Wednesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday8th.courseNo}<br />
                                {tableData.series19.Wednesday8th.teacherID}<br />
                                {tableData.series19.Wednesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series19.Wednesday9th.courseNo}<br />
                                {tableData.series19.Wednesday9th.teacherID}<br />
                                {tableData.series19.Wednesday9th.roomNo}
                            </p>
                        </td>


                    </tr>



                    <tr>
                        <td>20 Series</td>
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series20.Saturday1st.courseNo}<br />
                                {tableData.series20.Saturday1st.teacherID}<br />
                                {tableData.series20.Saturday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday2nd.courseNo}<br />
                                {tableData.series20.Saturday2nd.teacherID}<br />
                                {tableData.series20.Saturday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday3rd.courseNo}<br />
                                {tableData.series20.Saturday3rd.teacherID}<br />
                                {tableData.series20.Saturday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday4th.courseNo}<br />
                                {tableData.series20.Saturday4th.teacherID}<br />
                                {tableData.series20.Saturday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday5th.courseNo}<br />
                                {tableData.series20.Saturday5th.teacherID}<br />
                                {tableData.series20.Saturday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday6th.courseNo}<br />
                                {tableData.series20.Saturday6th.teacherID}<br />
                                {tableData.series20.Saturday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday7th.courseNo}<br />
                                {tableData.series20.Saturday7th.teacherID}<br />
                                {tableData.series20.Saturday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday8th.courseNo}<br />
                                {tableData.series20.Saturday8th.teacherID}<br />
                                {tableData.series20.Saturday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Saturday9th.courseNo}<br />
                                {tableData.series20.Saturday9th.teacherID}<br />
                                {tableData.series20.Saturday9th.roomNo}
                            </p>
                        </td>

                        {/* for sunday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series20.Sunday1st.courseNo}<br />
                                {tableData.series20.Sunday1st.teacherID}<br />
                                {tableData.series20.Sunday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday2nd.courseNo}<br />
                                {tableData.series20.Sunday2nd.teacherID}<br />
                                {tableData.series20.Sunday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday3rd.courseNo}<br />
                                {tableData.series20.Sunday3rd.teacherID}<br />
                                {tableData.series20.Sunday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday4th.courseNo}<br />
                                {tableData.series20.Sunday4th.teacherID}<br />
                                {tableData.series20.Sunday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday5th.courseNo}<br />
                                {tableData.series20.Sunday5th.teacherID}<br />
                                {tableData.series20.Sunday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday6th.courseNo}<br />
                                {tableData.series20.Sunday6th.teacherID}<br />
                                {tableData.series20.Sunday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday7th.courseNo}<br />
                                {tableData.series20.Sunday7th.teacherID}<br />
                                {tableData.series20.Sunday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday8th.courseNo}<br />
                                {tableData.series20.Sunday8th.teacherID}<br />
                                {tableData.series20.Sunday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Sunday9th.courseNo}<br />
                                {tableData.series20.Sunday9th.teacherID}<br />
                                {tableData.series20.Sunday9th.roomNo}
                            </p>
                        </td>

                        {/* for monday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series20.Monday1st.courseNo}<br />
                                {tableData.series20.Monday1st.teacherID}<br />
                                {tableData.series20.Monday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday2nd.courseNo}<br />
                                {tableData.series20.Monday2nd.teacherID}<br />
                                {tableData.series20.Monday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday3rd.courseNo}<br />
                                {tableData.series20.Monday3rd.teacherID}<br />
                                {tableData.series20.Monday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday4th.courseNo}<br />
                                {tableData.series20.Monday4th.teacherID}<br />
                                {tableData.series20.Monday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday5th.courseNo}<br />
                                {tableData.series20.Monday5th.teacherID}<br />
                                {tableData.series20.Monday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday6th.courseNo}<br />
                                {tableData.series20.Monday6th.teacherID}<br />
                                {tableData.series20.Monday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday7th.courseNo}<br />
                                {tableData.series20.Monday7th.teacherID}<br />
                                {tableData.series20.Monday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday8th.courseNo}<br />
                                {tableData.series20.Monday8th.teacherID}<br />
                                {tableData.series20.Monday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Monday9th.courseNo}<br />
                                {tableData.series20.Monday9th.teacherID}<br />
                                {tableData.series20.Monday9th.roomNo}
                            </p>
                        </td>

                        {/* for tuesday                         */}


                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series20.Tuesday1st.courseNo}<br />
                                {tableData.series20.Tuesday1st.teacherID}<br />
                                {tableData.series20.Tuesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday2nd.courseNo}<br />
                                {tableData.series20.Tuesday2nd.teacherID}<br />
                                {tableData.series20.Tuesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday3rd.courseNo}<br />
                                {tableData.series20.Tuesday3rd.teacherID}<br />
                                {tableData.series20.Tuesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday4th.courseNo}<br />
                                {tableData.series20.Tuesday4th.teacherID}<br />
                                {tableData.series20.Tuesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday5th.courseNo}<br />
                                {tableData.series20.Tuesday5th.teacherID}<br />
                                {tableData.series20.Tuesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday6th.courseNo}<br />
                                {tableData.series20.Tuesday6th.teacherID}<br />
                                {tableData.series20.Tuesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday7th.courseNo}<br />
                                {tableData.series20.Tuesday7th.teacherID}<br />
                                {tableData.series20.Tuesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday8th.courseNo}<br />
                                {tableData.series20.Tuesday8th.teacherID}<br />
                                {tableData.series20.Tuesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Tuesday9th.courseNo}<br />
                                {tableData.series20.Tuesday9th.teacherID}<br />
                                {tableData.series20.Tuesday9th.roomNo}
                            </p>
                        </td>


                        {/* for Wednesday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series20.Wednesday1st.courseNo}<br />
                                {tableData.series20.Wednesday1st.teacherID}<br />
                                {tableData.series20.Wednesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday2nd.courseNo}<br />
                                {tableData.series20.Wednesday2nd.teacherID}<br />
                                {tableData.series20.Wednesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday3rd.courseNo}<br />
                                {tableData.series20.Wednesday3rd.teacherID}<br />
                                {tableData.series20.Wednesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday4th.courseNo}<br />
                                {tableData.series20.Wednesday4th.teacherID}<br />
                                {tableData.series20.Wednesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday5th.courseNo}<br />
                                {tableData.series20.Wednesday5th.teacherID}<br />
                                {tableData.series20.Wednesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday6th.courseNo}<br />
                                {tableData.series20.Wednesday6th.teacherID}<br />
                                {tableData.series20.Wednesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday7th.courseNo}<br />
                                {tableData.series20.Wednesday7th.teacherID}<br />
                                {tableData.series20.Wednesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday8th.courseNo}<br />
                                {tableData.series20.Wednesday8th.teacherID}<br />
                                {tableData.series20.Wednesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series20.Wednesday9th.courseNo}<br />
                                {tableData.series20.Wednesday9th.teacherID}<br />
                                {tableData.series20.Wednesday9th.roomNo}
                            </p>
                        </td>


                    </tr>
                    <tr>
                        <td>21 Series</td>
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series21.Saturday1st.courseNo}<br />
                                {tableData.series21.Saturday1st.teacherID}<br />
                                {tableData.series21.Saturday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday2nd.courseNo}<br />
                                {tableData.series21.Saturday2nd.teacherID}<br />
                                {tableData.series21.Saturday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday3rd.courseNo}<br />
                                {tableData.series21.Saturday3rd.teacherID}<br />
                                {tableData.series21.Saturday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday4th.courseNo}<br />
                                {tableData.series21.Saturday4th.teacherID}<br />
                                {tableData.series21.Saturday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday5th.courseNo}<br />
                                {tableData.series21.Saturday5th.teacherID}<br />
                                {tableData.series21.Saturday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday6th.courseNo}<br />
                                {tableData.series21.Saturday6th.teacherID}<br />
                                {tableData.series21.Saturday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday7th.courseNo}<br />
                                {tableData.series21.Saturday7th.teacherID}<br />
                                {tableData.series21.Saturday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday8th.courseNo}<br />
                                {tableData.series21.Saturday8th.teacherID}<br />
                                {tableData.series21.Saturday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Saturday9th.courseNo}<br />
                                {tableData.series21.Saturday9th.teacherID}<br />
                                {tableData.series21.Saturday9th.roomNo}
                            </p>
                        </td>

                        {/* for sunday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series21.Sunday1st.courseNo}<br />
                                {tableData.series21.Sunday1st.teacherID}<br />
                                {tableData.series21.Sunday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday2nd.courseNo}<br />
                                {tableData.series21.Sunday2nd.teacherID}<br />
                                {tableData.series21.Sunday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday3rd.courseNo}<br />
                                {tableData.series21.Sunday3rd.teacherID}<br />
                                {tableData.series21.Sunday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday4th.courseNo}<br />
                                {tableData.series21.Sunday4th.teacherID}<br />
                                {tableData.series21.Sunday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday5th.courseNo}<br />
                                {tableData.series21.Sunday5th.teacherID}<br />
                                {tableData.series21.Sunday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday6th.courseNo}<br />
                                {tableData.series21.Sunday6th.teacherID}<br />
                                {tableData.series21.Sunday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday7th.courseNo}<br />
                                {tableData.series21.Sunday7th.teacherID}<br />
                                {tableData.series21.Sunday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday8th.courseNo}<br />
                                {tableData.series21.Sunday8th.teacherID}<br />
                                {tableData.series21.Sunday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Sunday9th.courseNo}<br />
                                {tableData.series21.Sunday9th.teacherID}<br />
                                {tableData.series21.Sunday9th.roomNo}
                            </p>
                        </td>

                        {/* for monday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series21.Monday1st.courseNo}<br />
                                {tableData.series21.Monday1st.teacherID}<br />
                                {tableData.series21.Monday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday2nd.courseNo}<br />
                                {tableData.series21.Monday2nd.teacherID}<br />
                                {tableData.series21.Monday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday3rd.courseNo}<br />
                                {tableData.series21.Monday3rd.teacherID}<br />
                                {tableData.series21.Monday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday4th.courseNo}<br />
                                {tableData.series21.Monday4th.teacherID}<br />
                                {tableData.series21.Monday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday5th.courseNo}<br />
                                {tableData.series21.Monday5th.teacherID}<br />
                                {tableData.series21.Monday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday6th.courseNo}<br />
                                {tableData.series21.Monday6th.teacherID}<br />
                                {tableData.series21.Monday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday7th.courseNo}<br />
                                {tableData.series21.Monday7th.teacherID}<br />
                                {tableData.series21.Monday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday8th.courseNo}<br />
                                {tableData.series21.Monday8th.teacherID}<br />
                                {tableData.series21.Monday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Monday9th.courseNo}<br />
                                {tableData.series21.Monday9th.teacherID}<br />
                                {tableData.series21.Monday9th.roomNo}
                            </p>
                        </td>

                        {/* for tuesday                         */}


                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series21.Tuesday1st.courseNo}<br />
                                {tableData.series21.Tuesday1st.teacherID}<br />
                                {tableData.series21.Tuesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday2nd.courseNo}<br />
                                {tableData.series21.Tuesday2nd.teacherID}<br />
                                {tableData.series21.Tuesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday3rd.courseNo}<br />
                                {tableData.series21.Tuesday3rd.teacherID}<br />
                                {tableData.series21.Tuesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday4th.courseNo}<br />
                                {tableData.series21.Tuesday4th.teacherID}<br />
                                {tableData.series21.Tuesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday5th.courseNo}<br />
                                {tableData.series21.Tuesday5th.teacherID}<br />
                                {tableData.series21.Tuesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday6th.courseNo}<br />
                                {tableData.series21.Tuesday6th.teacherID}<br />
                                {tableData.series21.Tuesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday7th.courseNo}<br />
                                {tableData.series21.Tuesday7th.teacherID}<br />
                                {tableData.series21.Tuesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday8th.courseNo}<br />
                                {tableData.series21.Tuesday8th.teacherID}<br />
                                {tableData.series21.Tuesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Tuesday9th.courseNo}<br />
                                {tableData.series21.Tuesday9th.teacherID}<br />
                                {tableData.series21.Tuesday9th.roomNo}
                            </p>
                        </td>


                        {/* for Wednesday */}
                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                {tableData.series21.Wednesday1st.courseNo}<br />
                                {tableData.series21.Wednesday1st.teacherID}<br />
                                {tableData.series21.Wednesday1st.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday2nd.courseNo}<br />
                                {tableData.series21.Wednesday2nd.teacherID}<br />
                                {tableData.series21.Wednesday2nd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday3rd.courseNo}<br />
                                {tableData.series21.Wednesday3rd.teacherID}<br />
                                {tableData.series21.Wednesday3rd.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday4th.courseNo}<br />
                                {tableData.series21.Wednesday4th.teacherID}<br />
                                {tableData.series21.Wednesday4th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday5th.courseNo}<br />
                                {tableData.series21.Wednesday5th.teacherID}<br />
                                {tableData.series21.Wednesday5th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday6th.courseNo}<br />
                                {tableData.series21.Wednesday6th.teacherID}<br />
                                {tableData.series21.Wednesday6th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday7th.courseNo}<br />
                                {tableData.series21.Wednesday7th.teacherID}<br />
                                {tableData.series21.Wednesday7th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday8th.courseNo}<br />
                                {tableData.series21.Wednesday8th.teacherID}<br />
                                {tableData.series21.Wednesday8th.roomNo}
                            </p>
                        </td>
                        <td>
                            <p>
                                {tableData.series21.Wednesday9th.courseNo}<br />
                                {tableData.series21.Wednesday9th.teacherID}<br />
                                {tableData.series21.Wednesday9th.roomNo}
                            </p>
                        </td>


                    </tr>

                </tbody>
            </Table >
        </div>
    );
}

export default Routine