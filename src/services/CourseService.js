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
                        title: 'Lesson 1'
                    },
                    {
                        title: 'Lesson 2'
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2',
                id:1245,
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
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