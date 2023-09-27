import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleToggle = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleDeleteAll = () => {
        setTodos([]);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom align="center" style={{ marginTop: '20px' }}>
                Todo List
            </Typography>
            <Card style={{ marginTop: '20px' }}>
                <CardContent>
                    <TextField
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        variant="outlined"
                        label="Nouvelle tâche"
                        fullWidth
                        style={{ marginBottom: '20px' }}
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleAdd} 
                        fullWidth 
                        startIcon={<AddIcon />}
                        style={{ marginBottom: '10px' }}
                    >
                        Ajouter
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={handleDeleteAll} 
                        fullWidth 
                        startIcon={<DeleteSweepIcon />}
                    >
                        Tout supprimer
                    </Button>
                    <List style={{ marginTop: '20px' }}>
                        {todos.map((todo, index) => (
                            <TodoItem
                                key={index}
                                todo={todo}
                                onToggle={() => handleToggle(index)}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Container>
    );
}

export default TodoList;