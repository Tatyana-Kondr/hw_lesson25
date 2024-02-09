type Props = {
    name: string,
    lastName: string,
    grades: number[]
};
function Student({lastName, name, grades}: Props){
    const averageGrade = grades.reduce((total, grade) => total + grade, 0)/grades.length;
    return (
        <div>
            <p>Фамилия: {lastName}</p>
            <p>Имя: {name}</p>
            {
                grades.length === 0
                ?<p>Оценок нет.</p>
                :<p>Средняя оценка: {averageGrade} </p>
            }
        </div>
    );
}
export default Student;