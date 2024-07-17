import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilizando o Dialog
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(2), // Borda arredondada
    boxShadow: theme.shadows[5], // Sombra
    minWidth: '500px', // Definindo a largura mínima
    minHeight: '300px', // Definindo a altura mínima
    backgroundColor: theme.palette.background.default, // Cor de fundo
    color: theme.palette.text.primary, // Cor do texto
  },
}));

// Estilizando o DialogTitle
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(3), // Adicionando um espaçamento interno
}));

// Estilizando o DialogContent
const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3), // Adicionando um espaçamento interno
}));

// Estilizando o DialogActions
const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2), // Adicionando um espaçamento interno
  justifyContent: 'center', // Centralizando as ações
}));

// Estilizando o botão
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`, // Espaçamento interno
  fontWeight: 'bold', // Peso da fonte
}));

const ArgonModal = ({ open, onClose, title, content, actions }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>{title}</StyledDialogTitle>
      <StyledDialogContent>{content}</StyledDialogContent>
      <StyledDialogActions>{actions}</StyledDialogActions>
    </StyledDialog>
  );
};

ArgonModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
};

export default ArgonModal;
