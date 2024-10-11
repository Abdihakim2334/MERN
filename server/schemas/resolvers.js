const { createUser, deleteBook } = require('../controllers/user-controller');
const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getsingleuser: async () => {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        return(foundUser);
      }
    
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(body);

      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    },
    deleteBook: async (parent, { _id, techNum }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Couldn't find user with this id!" });
      }
      return res.json(updatedUser);
    },
  },
};

module.exports = resolvers;
