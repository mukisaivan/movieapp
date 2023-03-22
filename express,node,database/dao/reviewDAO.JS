import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        } catch (e) {
            console.error(`unable to establish connection2 handles in userDAO: ${e}`)
        }
    }

    static async addReview(movieId, user, review) {
        try {
            const reviewDoc = {
                movieId: movieId,
                user: user,
                review: review
            }

            return await reviews.insertOne(reviewDoc) //insert one is a mongodb command to insert a document eg review document
        } catch (e) {
            console.error(`unable to post review: ${e}`);
            return ({ error: e })
        }
    }

    static async getReview(reviewId) {
        try {
            return await reviews.findOne({ _id: ObjectId(reviewId) }) // use "findOne" to find a document in the moongodb database
        } catch (e) {
            console.error(`unable to get review: ${e}`);
            return ({ error: e })
        }
    }

    static async updateReview(reviewId, user, review) {
        try {
            const updateResponse = await reviews.updateOne({ _id: ObjectId(reviewId) }, { $set: { user: user, review: review } })
            return updateResponse
        } catch (e) {
            console.error(`unable to update review: ${e}`);
            return ({ error: e })
        }
    }

    static async deleteReview(reviewId) {
        try {
            const deleteResponse = await reviews.deleteOne({ _id: ObjectId(reviewId) })
            return deleteResponse
        } catch (e) {
            console.error(`unable to delete review: ${e}`);
            return { error: e }
        }
    }

    static async getMoviesById(movieId) {
        try {

            const cursor = await reviews.find({ movieId: parseInt(movieId) }) // parseInt converts a string to an integer
            return cursor.toArray()

        } catch (e) {
            console.error(`unable to get review: ${e}`);
            return { error: e }
        }
    }



}