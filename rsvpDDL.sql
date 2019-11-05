DROP TABLE IF EXISTS `rsvp`;

CREATE TABLE rsvp (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(100),
  num_guests INTEGER,
  guest_names VARCHAR(200),
  drinks VARCHAR(10),
  songs VARCHAR(200),
  notes VARCHAR(500),
  PRIMARY KEY (id)
);