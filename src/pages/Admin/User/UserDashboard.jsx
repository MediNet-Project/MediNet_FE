import React, { useState } from "react";
import {
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TFoot,
} from "@twilio-paste/core/table";
import { useNavigate } from "react-router-dom";
import { Stack, Avatar, Box, Text } from "@twilio-paste/core";
import { EditIcon } from "@twilio-paste/icons/esm/EditIcon";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteUserAction,
  getListUserAction,
  getUserByIdAction,
} from "../../../redux/action/user-action";
import { useSelector } from "react-redux";
import img from "../../../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const listUser = useSelector((state) => state.userReducer.listUser);
  const [idToDelete, setIdToDelete] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getListUserAction());
  }, []);
  const renderModal = () => {
    return (
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are You Sure To Delete?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteUserAction(idToDelete));
                onClose();
                setIdToDelete(null);
              }}
              colorScheme="blue"
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <div className="w-full lg:px-3 ">
      <Table>
        <THead>
          <Tr>
            <Th textAlign="center">User Name</Th>
            <Th textAlign="center">Phone Number</Th>
            <Th textAlign="center">Position</Th>
            <Th textAlign="center">Action</Th>
          </Tr>
        </THead>
        <TBody>
          {listUser.map((item) => {
            if (item?.role !== "Admin") {
              return (
                <Tr key={Math.random()}>
                  <Th scope="row">
                    <Stack orientation="horizontal" spacing="space40">
                      <Avatar
                        size="sizeIcon60"
                        name="Adam Brown"
                        src={item?.image === null ? img : item?.image}
                      />
                      <Box>
                        <Text as="p">{item?.userName}</Text>
                        <Text
                          as="p"
                          color="colorTextWeak"
                          fontWeight="fontWeightNormal"
                        >
                          {item?.email}
                        </Text>
                      </Box>
                    </Stack>
                  </Th>
                  <Td textAlign="center">{item?.phone}</Td>
                  <Td textAlign="center">{item?.position}</Td>
                  <Td textAlign="center">
                    <div className="flex justify-center">
                      <div
                        className="mr-1"
                        onClick={() => {
                          dispatch(getUserByIdAction(item?.id));
                          navigate("/user-dashboard/update-user");
                        }}
                      >
                        <EditIcon
                          decorative={false}
                          title="Description of icon"
                          size="sizeIcon40"
                          color="#1473BB"
                        />
                      </div>
                      {renderModal()}
                      <div
                        className="ml-1"
                        onClick={() => {
                          setIdToDelete(item?.id);
                          onOpen();
                        }}
                      >
                        <DeleteIcon
                          decorative={false}
                          title="Description of icon"
                          color="#DF3F47"
                          size="sizeIcon40"
                        />
                      </div>
                    </div>
                  </Td>
                </Tr>
              );
            }
          })}
        </TBody>
      </Table>
    </div>
  );
};

export default UserDashboard;
