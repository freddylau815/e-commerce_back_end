const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findAll({
      include: Product
    })
   
    res.send(tag)

  }catch(err){
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag_id = req.params.id
  
  try {
    const tag = await Tag.findOne({
      where: {
        id: tag_id
      },
      include: Product
    })

    res.send(tag)

  }catch(err){
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag_data = req.body

    const new_tag = await Tag.create(tag_data)

    res.send(new_tag)
    
  }catch(err){
    console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tag_id = req.params.id

  try {
    const tag_data = req.body

    const tag = await Tag.update(tag_data,{
      where:{
        id: tag_id}})

    res.send({
      message: 'Tag Updated!'
    })
    
  }catch(err){
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tag_id = req.params.id

  try {
    await Tag.destroy({
      where: {
        id: tag_id
      }
    })

    res.send({
      message: 'Tag Deleted!'
    })
    
  }catch(err){
    console.log(err)
  }
});

module.exports = router;
