const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: Product
    })
    console.log('Get Catergories Route:', categories)
    res.send(categories)

  }catch(err){
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  const category_id = req.params.id
  
  try {
    const categories = await Category.findOne({
      where: {
        id: category_id
      },
      include: Product
    })

    res.send(categories)

  }catch(err){
    console.log(err)
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categories_data = req.body

    const new_category = await Category.create(categories_data)

    res.send(new_category)
    
  }catch(err){
    console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  const category_id = req.params.id

  try {
    const category_data = req.body

    const category = await Category.update(category_data,{
      where:{
        id: category_id}})

    res.send('Category Added')
    
  }catch(err){
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category_id = req.params.id

  try {
    await Category.destroy({
      where: {
        id: category_id
      }
    })

    res.send({
      message: 'Category Deleted!'
    })
    
  }catch(err){
    console.log(err)
  }
});

module.exports = router;
