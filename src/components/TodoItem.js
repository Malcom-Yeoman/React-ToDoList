import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <ListItem dense button style={{ marginBottom: '10px' }}>
            <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={onToggle}
                tabIndex={-1}
                disableRipple
                color="primary"
            />
            <ListItemText 
                primary={todo.text} 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#aaa' : 'inherit' }} 
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default TodoItem;