import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 150,
    maxWidth: 200,
    width: "100%"
    // paddingBottom: 15
  },
  selectClass: {
    height: "15px !important"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    // marginTop: theme.spacing(3)
  },
  icon: {
    color: "white"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300
    }
  }
};

const names = [
  "English",
  "Malayalam",
  "Chinese",
  "French",
  "Spanish",
  "Tamil",
  "Hindi",
  "Telungu",
  "Kannada",
  "German"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [isChecked, setChecked] = React.useState([true]);

  const [language, setLanguage] = React.useState(["All Languages"]);

  const handleChange = event => {
    var selected = event.target.value;
    if (selected.length > 1) {
      let forDeletion = ["All Languages"];
      selected = selected.filter(item => !forDeletion.includes(item));
      setChecked(false);
    } else if (selected.length === 0) {
      selected = ["All Languages"];
      setChecked(true);
    }
    setLanguage(selected);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        disableUnderline
        id="demo-mutiple-checkbox"
        multiple
        value={language}
        onChange={handleChange}
        classes={{
          icon: classes.icon,
          select: classes.selectClass
        }}
        input={<Input />}
        renderValue={selected => {
          if (selected) {
            return selected.join(", ");
          }
        }}
        MenuProps={MenuProps}
        floatingLabelStyle={{ color: "#fff" }}
      >
        <MenuItem key={"all"} value={"All Languages"}>
          <Checkbox checked={isChecked} color="dark" id="allLangCheckbox" />
          <ListItemText primary={"All Languages"} />
        </MenuItem>
        {names.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={language.indexOf(name) > -1} color="dark" />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
