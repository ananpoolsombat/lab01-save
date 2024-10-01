import { useState } from "react";

export default function Form() {
    const [Herb, setHerb] = useState({
        ชื่อสมุนไพร: 'Barbara',
        สรรพคุณยา: 'Heowort',
        ชื่อผู้ผลิต: 'bheoworth',
        ข้อมูลติดต่อผู้ผลิต: '0972507795',
        ประเภทของยา: 'ยาใช้ภายนอก'
    });

//object spread Syntax
    function handleชื่อสมุนไพรChange(e) {
        setHerb({
        ...Herb,// Copy the old fields
            ชื่อสมุนไพร: e.target.value
        });
}
function handleสรรพคุณยาChange(e) {
    setHerb({
    ...Herb,
    สรรพคุณยา: e.target.value
    });
}
function handleชื่อผู้ผลิตChange(e) {
    setHerb({
    ...Herb,
    ชื่อผู้ผลิต: e.target.value
    });
}
function handleข้อมูลติดต่อผู้ผลิตChange(e) {
    setHerb({
    ...Herb,
    ข้อมูลติดต่อผู้ผลิต: e.target.value
 });
}
function handleประเภทของยาChange(e) {
    setHerb({
    ...Herb,
    ประเภทของยา: e.target.value
 });
}

return (
    <>
        <label>
            ชื่อสมุนไพร:
            <input
            className="rounded-md border mb-2 w-1/4 h-8 block w-full"
                value={Herb.ชื่อสมุนไพร}
                onChange={handleชื่อสมุนไพรChange}
                />
        </label>
        <label>
            สรรพคุณยา:
            <input
                value={Herb.สรรพคุณยา}
                onChange={handleสรรพคุณยาChange}
                />
        </label>
        <label>
            ชื่อผู้ผลิต:
            <input
                value={Herb.ชื่อผู้ผลิต}
                onChange={handleชื่อผู้ผลิตChange}
                />
        </label>
        <label>
            ข้อมูลติดต่อผู้ผลิต:
            <input
                value={Herb.ข้อมูลติดต่อผู้ผลิต}
                onChange={handleข้อมูลติดต่อผู้ผลิตChange}
                />
        </label>
        <label>
            ประเภทของยา:
            <input
                value={Herb.ประเภทของยา}
                onChange={handleประเภทของยาChange}
                />
        </label>
        
        <label>
            Change Profile:
            <input
                value={Herb.ประเภทของยา}
                onChange={handleประเภทของยาChange}
                />
             {/* <select
               // value=//{myTemplate}
                onChange={e => setHerb({
                    ...Herb,
                    ประเภทของยา: e.target.value
                 })
                }
                name= "myTemplate" className="border-blue-200"
            >
                
                <option value="https://static.naewna.com/uploads/news/source/505439.jpg">APPLE</option>
                <option value="https://news.mthai.com/app/uploads/2019/12/15-05-19-20.jpg">BANANA</option>
             </select>    */}
        </label>
        <p>
            {Herb.ชื่อสมุนไพร}{''}
            {Herb.สรรพคุณยา}{''}
            {Herb.ชื่อผู้ผลิต}{''}
            ({Herb.ข้อมูลติดต่อผู้ผลิต})
            <img
            src= {Herb.ประเภทของยา}
            />
        </p>
    </>
)} 