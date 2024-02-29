const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");

const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, filename);

  // записував з jimp write тому  fs тільки видаляє
  (await Jimp.read(tempUpload))
    .resize(250, 250)
    .quality(60)
    .write(resultUpload);
  // для видалення тимчасового файлу з папки temp

  await fs.unlink(tempUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL });
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
