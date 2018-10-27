let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                id : 1234,
                lessons: [
                    {
                        title: 'Lesson 1',
                        id: 1234,
                        topics:[{
                            title: "topic 1"
                        }, {
                           title: "topic 2"
                            },
                            {
                            title: "topic 3"
                            }

                        ]
                    },
                    {
                        title: 'Lesson 2',
                        id: 2345,
                        topics:[]
                    },
                    {
                        title: 'Lesson 3',
                        id: 3456,
                        topics:[]
                    }
                ]
            },
            {
                title: 'Week 2',
                id:1245,
                lessons: [
                    {
                        title: 'Lesson A',
                        id: 4567,
                        topics:[]
                    },
                    {
                        title: 'Lesson B',
                        id: 5678,
                        topics:[]
                    },
                    {
                        title: 'Lesson C',
                        id: 6789,
                        topics:[]
                    }
                ]
            },
            {
                title: 'Week 3',
                id: 123467,
                lessons: []
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: []
    }
]

export default class CourseService {
    findAllCourses = () =>
        courses
    createCourse = course =>
        courses.push(course)
    deleteCourse = courseId =>
         courses.filter(
            course => course.id !== courseId
        )
    findCourseById(id){
        // console.log("######")
        // console.log(courses)
        // console.log("######")
        return courses.find(course => course.id === id)
    }
    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }

    addTopicByLessonId = (courseId, moduleId, lessonId, newTopic) =>{

        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].id===courseId)
            {
                let currentModules = courses[i].modules
                for (let j=0; j < currentModules.length; j++){
                    if (currentModules[j].id == moduleId){
                        let currentLessons = currentModules[j].lessons
                        for (let k=0; k < currentLessons.length; k++) {
                            if (currentLessons[k].id == lessonId) {
                                let currentTopics = currentLessons[k].topics
                                currentTopics.push(newTopic)
                                currentLessons[k].topics = currentTopics
                            }
                        }
                        currentModules.lessons = currentLessons
                    }
                }
                courses[i].modules =currentModules
                return courses;
            }
        }
        return null;
    }

    addLesssonByModuleId = (courseId, moduleId, newLesson)=> {
        console.log(courseId, moduleId)
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].id===courseId)
            {
                let currentModules = courses[i].modules
                for (let j=0; j < currentModules.length; j++){
                    if (currentModules[j].id == moduleId){
                        let currentLessons = currentModules[j].lessons
                        currentLessons.push(newLesson)
                        currentModules[j].lessons = currentLessons
                    }
                }
                courses[i].modules =currentModules
                return courses;
            }
        }
        return null;
    }

    addModuleByCourseId=(courseId, newModule)=>{

        console.log(courseId)
        console.log(newModule)
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].id===courseId)
            {
                let currentModules = courses[i].modules
                currentModules.push(newModule)
                courses[i].modules =currentModules
                return courses;
            }
        }
        return null;
    }

    deleteLessonById=(courseId, moduleId, lessonId)=>{
        let newLessons = courses.find(course => course.id === courseId).
        modules.find(module=> module.id === moduleId).lessons.filter(lesson => {return lesson.id !== lessonId})
        console.log(newLessons)
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].id===courseId)
            {
                let currentModules = courses[i].modules
                for (let j = 0; j < currentModules.length; j++)
                {
                    if (currentModules[j].id===moduleId) {
                        currentModules[j].lessons = newLessons
                        return currentModules[j];
                    }
                }
            }
        }
    }

    deleteModuleById=(courseId, moduleId)=>{

        console.log(courseId)
        console.log(moduleId)
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].id===courseId)
            {
                let currentModules = courses[i].modules
                courses[i].modules = currentModules.filter((module)=>{
                    return module.id !== moduleId

                })
                return  courses[i];
            }
        }
        return null;
    }

    updateModule=(courseId, module)=>{
        // console.log("------")
        // console.log(courses)
        // console.log("-----")
        for(let i=0; i<courses.length;i++){
            if(courses[i].id === courseId){
                for(let j=0; j<courses[i].modules.length;j++){
                    if(courses[i].modules[j].id == module.id){
                        courses[i].modules[j] = module
                        return courses[i];
                    }
                }
            }
        }
        // console.log("######")
        // console.log(courses)
        // console.log("######")
        return null;
        // console.log(courseId)
        // console.log(module)
        //
        // for (let i = 0; i < courses.length; i++)
        // {
        //     if (courses[i].id===courseId)
        //     {
        //         let currentModules = courses[i].modules
        //         alert(module.id)
        //         courses[i].modules[module.id] =  module
        //
        //         console.log(courses[i].modules)
        //         return  courses[i];
        //     }
        // }
        // return null;
    }




    findLessonsByCourseModuleId =(courseId, moduleId)=>{
        courses.find((course)=>{
            return course.id== courseId
        })
    }


    addLesson=(courseId,moduleId)=>{

        return null
    }

    updateLesson=(courseId,moduleId, lessonId)=>{

        return null
    }

    deleteLesson=(courseId,moduleId, lessonId)=>{

        return null
    }

}