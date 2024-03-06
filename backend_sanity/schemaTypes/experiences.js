export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'company_logo',
            title:'Company_Logo',
            type:'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'role',
            title:'Role',
            type:'string'
        },
        {
            name:'duration',
            title:'Duration',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'skills',
            title:'Skills',
            type:'array',
            of:[{ type:'string'}]
        },
    ]
}