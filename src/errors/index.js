module.exports = {
  notFound: (req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  },

  handleError: (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.errors = req.app.get("env") === "development" ? err : {};
    return res.status(err.status || 500).json({ message: err.message });
  },
};
