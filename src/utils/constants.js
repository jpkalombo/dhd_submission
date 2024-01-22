import { VerifiedUser } from "@mui/icons-material";
import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { OpenInFullOutlined } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { Login } from "@mui/icons-material";

export const logo = '../logo.png';

export const cons = [
    {name: 'New', icon: <Add />,},
    {name: 'Delete', icon: <Delete />,},
    {name: 'View', icon: <OpenInFullOutlined />,},
    {name: 'Edit', icon: <Edit />,},
    {name: 'Remove', icon: <RemoveCircleOutlineOutlined />,},
    {name: 'User', icon: <VerifiedUser />,},
    {name: 'Logout', icon: <Logout />,},
    {name: 'Login', icon: <Login />,},
]